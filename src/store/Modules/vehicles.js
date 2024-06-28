const state ={
    vehiclesDetails: [
        {
            vehicleNumber: 1,
            vehicleName: "Audi A4",
            vehiclePrice: "Ksh. 7,000,000",
            vehicleImage: 'public/Images/audi_a4.jpeg',
            description: " 2024 Model, 3.0L V6, 300HP"

        },
        {
            vehicleNumber: 2,
            vehicleName: "Audi R8",
            vehiclePrice: "Ksh. 17,500,000",
            vehicleImage: 'public/Images/audi_r8.jpeg',
            description: "2023 Model, 5.2L V10, 5204 CC, 580 HP"

        },
        {
            vehicleNumber: 3,
            vehicleName: "Audi RS7",
            vehiclePrice: "Ksh. 14,000,000",
            vehicleImage: 'public/Images/audi_rs7.jpeg',
            description: "2024 Model, 4.0L V8, 3996CC, 590HP"

        },
        {
            vehicleNumber: 4,
            vehicleName: "Audi Q8",
            vehiclePrice: "Ksh. 10,400,000",
            vehicleImage: 'public/Images/audi-q8.jpg',
            description: "2024 Model 4.0L V8, 400HP"

        },
        {
            vehicleNumber: 5,
            vehicleName: "BMW 320i",
            vehiclePrice: "Ksh. 3,000,000 ",
            vehicleImage: 'public/Images/bmw_320i.jpeg',
            description: "2024 Model, 2.0L I4, 1998CC, 181HP"

        },
        {
            vehicleNumber: 6,
            vehicleName: "BMW i8",
            vehiclePrice: "Ksh. 18,000,000",
            vehicleImage: 'public/Images/bmw_i8.jpeg',
            description: "2024 Model, 1.5L I3 + Electic Motor, 1499CC, 369HP"

        },
        {
            vehicleNumber: 7,
            vehicleName: "BMW M4",
            vehiclePrice: "Ksh. 10,000,000",
            vehicleImage: 'public/Images/bmw_m4.jpeg',
            description: "2024 Model, 4.0L V8, 543HP"

        },
        {
            vehicleNumber: 8,
            vehicleName: "Mercedes G63 AMG",
            vehiclePrice: "Ksh. 30,000,000",
            vehicleImage: 'public/Images/mercede_g63.jpeg',
            description: " 2021 Model, 4.0L V8, 3982 CC, 577HP"

        },
        {
            vehicleNumber: 9,
            vehicleName: "Mercedes GLC63 AMG",
            vehiclePrice: "Ksh. 8,000,000",
            vehicleImage: 'public/Images/mercedes_glc63.jpeg',
            description: " 2024 Model, 4.0L V8, 3982CC, 469HP"

        },
        {
            vehicleNumber: 10,
            vehicleName: "Mercedes AMG GT Coupe",
            vehiclePrice: "Ksh. 10,000,000",
            vehicleImage: 'public/Images/mercedes_gtcoupe.jpeg',
            description: " 2024 Model, 4.0L V8, 3982CC"

        }

    ]

}
const getters={
    vehicle: (state) => state.vehiclesDetails

}
const actions={

}
const mutations={

}
export default{
    state,
    getters,
    actions,
    mutations
}