import Loading from '../../Component/Loading/Loading';
import Advisor from './Advisors/Advisor';
import Consultant from './Consultant/Consultant';

import Others from './others';
import OurTeam from './OurTeam/OurTeam';
const About = () => {
    <Loading/>
    return (
        <div>
            <div className="hero md:h-96 lg:h-96" style={{ backgroundImage: 'url(https://i.ibb.co/zF82vmG/image.png)' }}>
             
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                    </div>
                </div>
            </div>
            
<Advisor></Advisor>
            <OurTeam></OurTeam>
            <Consultant></Consultant>
            <Others />
        </div>
    );
};

export default About;