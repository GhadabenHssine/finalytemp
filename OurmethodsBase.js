import React from 'react'
import styles from "./style.module.css"
import Image from 'next/image'
import generalClass from "../../generalClass.module.css";

const OurmethodsBase = () => {
    return (


        <div className={styles.container}>

            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Our methods</h1>
            </div>

            <div className={styles.containerIcons}>

                <div className={styles.icons} style={{ paddingTop: "40px" }}>
                    <Image
                        src="/assets/Ourmethods/PlanAndDiscuss.png"
                        width={60}
                        height={60}
                        alt="discuss"

                    />
                    <p className={styles.titleIcons}>Plan and discuss</p>
                    <p className={styles.paragrapheIcons}>The initial phase of a project begins with
                        strategic planning to establish desired goals,
                        reduce risk, avoid deadlines and deliver the
                        agreed product, service or solution</p>
                </div>

                <div className={styles.icons} style={{ paddingTop: "60px" }}>
                    <Image
                        src="/assets/Ourmethods/ConstructionConcepts.png"
                        width={60}
                        height={60}
                        alt="Construction concepts"

                    />
                    <p className={styles.titleIcons} >Construction concepts</p>
                    <p className={styles.paragrapheIcons}>
                        Building construction is the foundation for any project as it
                        demonstrates the overall design objective and provides
                        direction to everyone on the project team. We have a clear and
                        cohesive design approach that simplifies the project delivery
                        process
                    </p>
                </div>

                <div className={styles.icons}>
                    <Image
                        src="/assets/Ourmethods/StartProduction.png"
                        width={60}
                        height={60}
                        alt="Start production"

                    />
                    <p className={styles.titleIcons}>Start production</p>
                    <p className={styles.paragrapheIcons}>As we move forward with the project, we begin the execution
                        phase, which consists of creating a timeline, assigning tasks to
                        teams, defining the scope, and developing technical
                        specifications</p>
                </div>


                <div className={styles.icons} >
                    <div className={styles.icon4}>
                        <Image
                            src="/assets/Ourmethods/ProjectDelivery.png"
                            width={60}
                            height={60}
                            alt="Project delivery"

                        />
                        <p className={styles.titleIcons}>Project delivery</p>
                        <p className={styles.paragrapheIcons}>We deliver to the customer what is promised during the project
                            life cycle after proper planning, design and implementation of
                            the project. This guarantees the authenticity and efficiency of
                            the assigned projects.</p>
                    </div>
                </div>

            </div>

            {/* 
            <div >

                <Image
                    src="/assets/Ourmethods/bg.png"
                    className={styles.backgroundImg}
                    width={1366}
                    height={1368}
                    alt="pattern"
                />
            </div> */}
            <div className={styles.landing}>
                <h2 className={styles.titleLanding}> Our Price </h2>
                <p className={styles.paragrapheLanding}>A thoughtful plan for every business</p>


                <div className={styles.box} >
                    <div className={styles.box1}>

                        <h3 className={styles.titleBox1}>Sixth package</h3>
                        <p className={styles.SuTBox1}>6000 <span >DHA</span></p>
                        <p className={styles.paragrapheBox1}>
                            e-commece or e-real estate
                            custom design and uniqe
                            visual identity
                            hight performance 100%
                            seo and best practice 100%
                            dashboard for add, edit
                        </p>
                        <button className={styles.btn1} >Start A Trial</button>

                    </div>
                    <div className={styles.box2}>

                        <p className={styles.titleBox2}>First package</p>
                        <p className={styles.SuTBox2}>1000 <span >DHA</span></p>
                        <div className={styles.paragrapheBox2}>
                            <div className={styles.justflex}>
                                <span> website</span>
                                <span> : one page</span>
                            </div>
                            <span> Contact form easy to find</span> in google
                            <span> suitable</span> for phone, tablets and desktops.
                        </div>

                        <button className={styles.btn2} >Start A Trial</button>

                    </div>
                    <div className={styles.box1}>

                        <p className={styles.titleBox1}>The second package</p>
                        <p className={styles.SuTBox1}>2000 <span >DHA</span></p>
                        <div className={styles.paragrapheBox1}>
                            <div className={styles.justflex}>
                                <span> website</span>
                                <span>  : up to 5 pages</span>
                            </div>
                            Home page banner
                            Contact forms
                            Extensive menus
                            Hight performance 100%...
                            easy to find in google
                        </div>
                        <button className={styles.btn1} >Start A Trial</button>


                    </div>




                </div>





            </div>

        </div>


    )
}

export default OurmethodsBase