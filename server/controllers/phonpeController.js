import fetch from 'node-fetch';
import bcrypt from 'bcrypt';
import axios from 'axios';
import crypto from 'crypto';
import Booking from '../models/BookingSchema.js';

const generateTransactionId = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);
  const merchantPrefix = 'T';
  const transactionId = `${merchantPrefix}${timestamp}${randomNum}`;
  return transactionId;
};

export const initiatePayment = async (req, res) => {
  try {
    const { name, number, amount, user } = req.body;
    const { appointmentId } = req.params;

    const data = {
      "merchantId": "PGTESTPAYUAT",
      "merchantTransactionId": appointmentId,
      "merchantUserId": "MUID123",
      "amount": amount * 100,
      "redirectUrl": "http://localhost:5000/api/phonepe/status",
      "redirectMode": "POST",
      "callbackUrl": "http://localhost:5000/api/phonepe/status",
      "mobileNumber": number,
      "paymentInstrument": {
        "type": "PAY_PAGE"
      }
    }

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString('base64');
    const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const keyIndex = 1;
    const string = payloadMain + '/pg/v1/pay' + key;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = sha256 + '###' + keyIndex;


    const options = { 
      method: 'POST',
      url: 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      data: {
        request: payloadMain
      }
    };

    axios
      .request(options)
      .then(function (response) {
        res.status(200).json({ data: response.data.data.instrumentResponse.redirectInfo.url, message: "Processing payment" });
      })
      .catch(function (error) {
        alert(error);
      });


  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to proceed." });
  }
};

export const paymentStatus = async (req, res) => {
  const { merchantId, transactionId } = res.req.body;

  const keyIndex = 1;
  const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
  const string = `/pg/v1/status/${merchantId}/${transactionId}` + key;
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  const checksum = sha256 + '###' + keyIndex;

  const options = {
    method: 'GET',
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VERIFY': checksum,
      'X-MERCHANT-ID': merchantId
    }
  };
  const transaction = await Booking.findById(transactionId);

  axios
    .request(options)
    .then(async (response) => {
      await Booking.findByIdAndUpdate(transactionId, { status: "approved" });


      res.redirect('http://localhost:5173/profile/' + transaction.user._id);
    })
    .catch((error) => {
      res.redirect('http://localhost:5173/profile/' + transaction.user._id);
      console.log(error);
    });

};
