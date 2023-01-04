import React from "react";
import icon1 from '../../assets/service-1.png'

const Services = () => {

    const services = [
        {
            id: 1,
            icon: icon1,
            title: 'Email Management',
            description: 'Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.'
        },
        {
            id: 2,
            icon: icon1,
            title: 'Campaign Calender',
            description: 'Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.'
        },
        {
            id: 3,
            icon: icon1,
            title: 'Personal assistance',
            description: 'Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.'
        },
        {
            id: 4,
            icon: icon1,
            title: 'Payment feature',
            description: 'Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.'
        },
        {
            id: 5,
            icon: icon1,
            title: 'Utility apps',
            description: 'Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.'
        },
        {
            id: 6,
            icon: icon1,
            title: 'Sale notification',
            description: 'Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper.'
        },
    ]

  return (
    <section>
      <div className="container mx-auto px-4 lg:px-0 mt-[8.75rem]">
        <div className="text-center mb-[3.75rem]">
          <div className="text-5xl font-bold leading-tight">
            <h1>Supercharge your</h1>
            <h1>workflow to get started</h1>
          </div>

          <p className="text-[0.938rem] font-medium pt-[0.898rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>


        {/* Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
            {
                services.map(service => <div className="bg-white px-10 py-[2.875rem] shadow-sm rounded-[1.875rem]" key={service.id}>
                   <div className="h-14 w-14 flex items-center justify-center bg-[#9D0AFF] rounded-2xl">
                        <img className="" src={service.icon} alt={service.title} />
                   </div>
                    <h1 className="text-2xl font-bold mt-7">{service.title}</h1>
                    <p className="mt-[0.824rem]">{service.description}</p>
                </div>)
            }
        </div>

      </div>
    </section>
  );
};

export default Services;
