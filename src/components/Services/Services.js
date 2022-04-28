import React, {Fragment} from 'react';
import styles from "./Services.module.css"

const Services = () => {

    return (
        <Fragment>
            <div>
                <h2 className={`${styles["services-header"]} text-dark ff-serif-bold fs-700`}>Services</h2>

                <h3 className={`${styles["services-subheader"]} fs-600 ff-serif-bold`}
                    style={{textAlign: 'center'}}>Sports Style Massage</h3>
                <section className={`${styles["services-description"]} fs-400`} style={{textAlign: 'center'}}>
                    This style of massage is not only for people who play sports, but clients focused on repair &
                    rehab for the muscles, joints, surrounding tissue, and posture. You can utilize the time for
                    full body or spot treatment in one area. With 60 minutes we have time to address either upper
                    body or lower body. Occasionally you will be fully clothed to assess movement patterns, perform
                    corrective exercises. Included: Deep tissue, Myofascial release, Trigger point therapy, PNF
                    stretching, Corrective exercise
                </section>
                <ul style={{textAlign: 'center', margin: '0'}}>


                    <li>Sport 60 min -
                    </li>
                    <li>Sport 90 -
                    </li>
                    <li>Sport 120 -
                    </li>
                </ul>
                <h3 className={`${styles["services-subheader"]} fs-600 ff-serif-bold`}
                    style={{textAlign: 'center'}}>Spa Style Massage</h3>


                <section className={`${styles["services-description"]} fs-400`} style={{textAlign: 'center'}}>This traditional style of massage is what most people think of when they book a massage
                    & Swedish Massage is focused on general relaxation for the body & mind while improving
                    circulation & decreasing pain. Typically, a full body massage while highlighting some areas of
                    tension, for example; neck & shoulder focus, low back, etc. With 60 minutes we have time for the
                    basics.</section>
                <ul>
                    <li>
                        Spa 60 -
                    </li>
                    <li>
                        Spa 90 -
                    </li>
                    <li>
                        Spa 120 -
                    </li>
                </ul>

                <h3 className={`${styles["services-subheader"]} fs-600 ff-serif-bold`}
                    style={{textAlign: 'center'}}>Personal Training</h3>
                <section className={`${styles["services-description"]} fs-400`} style={{textAlign: 'center'}}>
                    Personal Training - With my Certification in Strength and Conditioning Spec(CSCS) recognized by
                    National Strength and Conditioning Association (NSCA), so I can offer personal training to
                    clients. I am currently involved in another certification called Functional Range Conditioning
                    (FRC). My space does not contain exercise equipment, so keep that in mind. We will be doing more
                    corrective exercise rather than strictly weight lifting.
                </section>

            </div>
        </Fragment>
    )
}

export default Services