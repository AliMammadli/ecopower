import sty from '../styles/blog.module.css'

import { useSnapshot } from 'valtio'
import { STApp } from '../store/utils.store'

export const Blog = () => {
    const appSnap = useSnapshot(STApp)

    return (
        <div className={sty.page}>
            <section className='container'>
                <div className={sty.blog}>
                    <h6 className={sty.blogDetails}>FEATURE | December 8, 2022</h6>
                    <h2 className={sty.blogTitle}>Goals and progress</h2>
                    <h4 className={sty.blogSubtitle}>The company’s Employee Giving program has raised over $880 million</h4>
                    <p className={sty.blogContent}>
                        This year’s Environmental Progress Report shows the breadth of the environmental
                        solutions we’re advancing, and the scale of collaboration that helped make them
                        possible. The details here matter, because they add up to meaningful, substantive
                        progress in our work for the planet. We are laser-focused on our commitment to
                        achieve carbon neutrality for our entire footprint by 2030, a goal we have already
                        reached for our own operations. At the same time, we’re working to one day make
                        our products without taking from the earth, and to be a force for equity in the world
                        around us.<br /><br />

                        Across all of these efforts, we never lose sight of our primary mission — working
                        to address the climate crisis. It’s an urgent challenge no one company, entity or
                        individual can tackle alone, and this year, we’re addressing it with more ambition than
                        ever before. In fact, we’ve begun to decouple business growth from emissions as we
                        drive towards our goal of bringing our entire carbon footprint to net zero by 2030 —
                        including our supply chain and the use of our products. While our revenue grew
                        33 percent, our net emissions remained flat.<br /><br />

                        Today, 213 of our suppliers — representing the majority of Apple’s direct supplier
                        spend — are committed to using 100 percent renewable energy for their Apple
                        business. In the last year, we more than doubled the amount of clean energy used to
                        manufacture Apple products.<br /><br />
                    </p>
                </div>

                <div className={sty.blog}>
                    <h6 className={sty.blogDetails}>UPDATE | November 16, 2022</h6>
                    <h2 className={sty.blogTitle}>Report highlights</h2>
                    <h4 className={sty.blogSubtitle}>The company’s Employee Giving program has raised over $880 million</h4>
                    <p className={sty.blogContent}>
                        This year’s Environmental Progress Report shows the breadth of the environmental
                        solutions we’re advancing, and the scale of collaboration that helped make them
                        possible. The details here matter, because they add up to meaningful, substantive
                        progress in our work for the planet. We are laser-focused on our commitment to
                        achieve carbon neutrality for our entire footprint by 2030, a goal we have already
                        reached for our own operations. At the same time, we’re working to one day make
                        our products without taking from the earth, and to be a force for equity in the world
                        around us.<br /><br />

                        Across all of these efforts, we never lose sight of our primary mission — working
                        to address the climate crisis. It’s an urgent challenge no one company, entity or
                        individual can tackle alone, and this year, we’re addressing it with more ambition than
                        ever before. In fact, we’ve begun to decouple business growth from emissions as we
                        drive towards our goal of bringing our entire carbon footprint to net zero by 2030 —
                        including our supply chain and the use of our products. While our revenue grew
                        33 percent, our net emissions remained flat.<br /><br />

                        Today, 213 of our suppliers — representing the majority of Apple’s direct supplier
                        spend — are committed to using 100 percent renewable energy for their Apple
                        business. In the last year, we more than doubled the amount of clean energy used to
                        manufacture Apple products.<br /><br />
                    </p>
                </div>

                <div className={sty.blog}>
                    <h6 className={sty.blogDetails}>FEATURE | October 24, 2022</h6>
                    <h2 className={sty.blogTitle}>Low-carbon design</h2>
                    <h4 className={sty.blogSubtitle}>The company’s Employee Giving program has raised over $880 million</h4>
                    <p className={sty.blogContent}>
                        This year’s Environmental Progress Report shows the breadth of the environmental
                        solutions we’re advancing, and the scale of collaboration that helped make them
                        possible. The details here matter, because they add up to meaningful, substantive
                        progress in our work for the planet. We are laser-focused on our commitment to
                        achieve carbon neutrality for our entire footprint by 2030, a goal we have already
                        reached for our own operations. At the same time, we’re working to one day make
                        our products without taking from the earth, and to be a force for equity in the world
                        around us.<br /><br />

                        Across all of these efforts, we never lose sight of our primary mission — working
                        to address the climate crisis. It’s an urgent challenge no one company, entity or
                        individual can tackle alone, and this year, we’re addressing it with more ambition than
                        ever before. In fact, we’ve begun to decouple business growth from emissions as we
                        drive towards our goal of bringing our entire carbon footprint to net zero by 2030 —
                        including our supply chain and the use of our products. While our revenue grew
                        33 percent, our net emissions remained flat.<br /><br />

                        Today, 213 of our suppliers — representing the majority of Apple’s direct supplier
                        spend — are committed to using 100 percent renewable energy for their Apple
                        business. In the last year, we more than doubled the amount of clean energy used to
                        manufacture Apple products.<br /><br />
                    </p>
                </div>
            </section>

            <section className='container'>
                <div style={{ height: '140px' }} />
            </section>
        </div>
    )
}