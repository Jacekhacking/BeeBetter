import React, {Fragment} from 'react';
import styles from "./Services.module.css"
import BookingButton from "../UI/Button/BookingButton.js";

const Services = () => {

    return (
        <Fragment>
            <div id="Services">
                <h2 className={`${styles["services-header"]} text-dark ff-serif-bold fs-700`}>Services & Modalities</h2>


                <h3 className={`${styles["services-subheader"]} fs-600 ff-serif-bold`}
                    style={{textAlign: 'center'}}>Sports Style Massage</h3>


                <p className={`${styles['services-prices']}`}>Starting at $90 </p>


                <p className={`${styles["services-description"]} fs-400`}>
                    This style of massage is not only for people who play sports, but clients focused on repair &
                    rehab for the muscles, joints, surrounding tissue, and posture. You can utilize the time for
                    full body or spot treatment in one area. With 60 minutes we have time to address either upper
                    body or lower body. Occasionally you will be fully clothed to assess movement patterns, perform
                    corrective exercises. Included: Deep tissue, Myofascial release, Trigger point therapy, PNF
                    stretching, Corrective exercise
                </p>


                <ul style={{textAlign: 'center', margin: '0'}}>
                    <li>--60 minute--
                    </li>
                    <li>--90 minute--
                    </li>
                    <li>--120 minute--
                    </li>
                </ul>


                <h3 className={`${styles["services-subheader"]} `}
                    style={{textAlign: 'center'}}>Spa Style Massage</h3>
                <p className={`${styles['services-prices']}`}>Starting at $70 </p>


                <p className={`${styles["services-description"]} `}>This traditional style of massage is what most
                    people think of when they book a massage
                    & Swedish Massage is focused on general relaxation for the body & mind while improving
                    circulation & decreasing pain. Typically, a full body massage while highlighting some areas of
                    tension, for example; neck & shoulder focus, low back, etc. With 60 minutes we have time for the
                    basics.</p>
                <ul style={{textAlign: 'center', margin: '0'}}>
                    <li>
                        --60 minute--
                    </li>
                    <li>
                        --90 minute--
                    </li>
                    <li>
                        --120 minute--
                    </li>
                </ul>


                <h3 className={`${styles["services-subheader"]} `}
                    style={{textAlign: 'center'}}>Focused Stretching Session</h3>
                <p className={`${styles['services-prices']}`}>Starting at $40 </p>


                <p className={`${styles["services-description"]}`}>
                    You can book a one-one-assisted stretching session. This will utilize PNF style of stretching to
                    improve flexibility & encourage relaxation. I also offer stretching in certain massage sessions, so
                    you can have access to both in one session. With 90 min we have time to address the entire body &
                    focus on specific issues along the way
                </p>


                <ul style={{textAlign: 'center', margin: '0'}}>

                    <li>  --30 minute--</li>
                    <li>--60 minute--</li>
                </ul>



                <h3 className={`${styles["services-subheader"]}`} style={{textAlign: 'center'}} >Personal Training</h3>
                <p className={`${styles['services-prices']}`}>Starting at $50 </p>


                <p className={`${styles["services-description"]}`}>
                    Certification in Strength and Conditioning <span className={`fs-300`}>(CSCS)</span> recognized by
                    National Strength and Conditioning Association <span className={`fs-300`}>(NSCA)</span>, so I can
                    offer personal training to
                    clients. I am currently involved in another certification called Functional Range Conditioning
                    <span className={`fs-300`}>(FRC)</span>. My space does not contain exercise equipment, so keep that
                    in mind. We will be doing more
                    corrective exercise rather than strictly weight lifting.
                </p>


                <h3 className={`${styles["services-subheader"]} `}
                    style={{textAlign: 'center'}}>Nutrition Counseling</h3>
                <p className={`${styles['services-prices']}`}>Starting at $50 </p>


                <p className={`${styles["services-description"]} `}>
                    This is a consultation style meeting where we can address any questions you have involving your
                    nutrition. We can discuss your goals, calculate macros, and improve your mindset with eating. I have
                    experience with nutrition from college classes & my own body recomposition journey. I am not a
                    dietician, I am a nutritionist, and you should know the difference before spending money on this
                    service.

                </p>
                <BookingButton/>
            </div>
        </Fragment>
    )
}

export default Services