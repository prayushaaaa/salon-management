import React, { Component } from 'react'

export default class ServiceAbout extends Component {
  render() {
    return <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                About of
                <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                    Haircut
                </span>
            </h3>
            <p className='text__para'>
                Elevate your appearance with our expertly crafted haircut services, meticulously designed to complement your individual style and personal preferences. Our team of seasoned stylists brings years of experience to the salon chair, ensuring that your haircut journey is nothing short of exceptional. Whether you're in pursuit of a cutting-edge, contemporary look that's on-trend or a more enduring, timeless style, we've got you covered. At our salon, it's not just about a haircut; it's about a transformation that leaves you looking and feeling your absolute best.
            </p>
        </div>
    </div>
  }
}
