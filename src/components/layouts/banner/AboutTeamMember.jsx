import React from 'react';
import hero2 from '../../../assets/hero2.png';
import Maisoklyna from '../../../assets/Maisoklyna.jpg';

const teamMembers = [
    { name: "រៀន ចាន់រីន", role: "ប្រធានក្រុម", image: hero2 },
    { name: "យឹម សុខា", role: "អនុប្រធាន", image: hero2 },
    { name: "ឌីតា​​​ វុិកទ័រ", role: "សមាជិក", image: hero2 },
    { name: "ម៉ៃ​ សុខលីណា", role: "សមាជិក", image:Maisoklyna},
    { name: "ហេង ល័ងឈ័រ", role: "សមាជិក", image: hero2 },
    { name: "សាយ គីមឡុង", role: "សមាជិក", image:hero2 },
    { name: "តុង​​ ទីន", role: "សមាជិក", image:hero2 },
    { name: "ជិន​ ណារិន", role: "សមាជិក", image: hero2},
    { name: "អាន ដាលីន", role: "សមាជិក", image:hero2 },
    { name: "ណំ តុលា", role: "សមាជិក", image:hero2 },
];

const AboutTeamMember = () => {
    return (
        
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mt-40">
            {teamMembers.map((member, index) => (
                <div key={index} className=" shadow-lg rounded-small p-2 m-4 flex flex-col items-center w-[371px] h-[261px]  rounded-small border border-gray-200 gap-1">
                    <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full mb-4" />
                    <h2 className="text-lg font-bold ">{member.name}</h2>
                    <p className="text-gray-500 ">{member.role}</p>
                </div>
            ))}
        </div>
  
    );
};

export default AboutTeamMember;
