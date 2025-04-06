import React from 'react';
import rin from '../../../assets/Menber/rin1.png';
import sokha from '../../../assets/Menber/sokha.png';
import tola from '../../../assets/Menber/tola.png'
import hng from '../../../assets/Menber/l.png';
import Ton from '../../../assets/Menber/Ton.png'
import reator from '../../../assets/Menber/tor.png'
const teamMembers = [
    { name: "រៀន ចាន់រីន", role: "ប្រធានក្រុម", image: rin },
    { name: "យឹម សុខា", role: "អនុប្រធាន", image: sokha },
    { name: "ឌីតា​​​ វុិកទ័រ", role: "សមាជិក", image:reator  },
    { name: "ម៉ៃ​ សុខលីណា", role: "សមាជិក", image: rin },
    { name: "ហេង ល័ងឈ័រ", role: "សមាជិក", image: hng },
    { name: "សាយ គីមឡុង", role: "សមាជិក", image: rin },
    { name: "តុង​​ ទីន", role: "សមាជិក", image: Ton },
    { name: "ជិន​ ណារិន", role: "សមាជិក", image: rin },
    { name: "អាន ដាលីន", role: "សមាជិក", image: rin },
    { name: "ណំ តុលា", role: "សមាជិក", image: tola },
];

const AboutTeamMember = () => {
    return (


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-[8%]">
            {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className="shadow-lg border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center bg-white"
                >
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 sm:w-36 sm:h-36  rounded-full mb-4 object-cover"
                    />
                    <h2 className="text-lg font-semibold">{member.name}</h2>
                    <p className="text-gray-500">{member.role}</p>
                </div>
            ))}
        </div>


    );
};

export default AboutTeamMember;
