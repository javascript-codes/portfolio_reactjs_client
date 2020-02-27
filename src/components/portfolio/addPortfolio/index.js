import React , { useState } from "react";
import { Redirect } from "react-router-dom";

// const AddPortfolio = props => {
//     console.log("name", props);
//     const [values, setValues] = useState({ name: "" });
//     const handleInputChange = event => {
//         const { value, name } = event.target;
//         setValues({ ...values, [name]: value });
//     };
//     const onSubmit = event => {
//         event.preventDefault();
//         props.addPortfolioAction(values);
//         // fetch("/api/auth/login", {
//         //   method: "POST",
//         //   body: JSON.stringify(values),
//         //   headers: {
//         //     "Content-Type": "application/json"
//         //   }
//         // })
//         //   .then(res => {
//         //     console.log(res.status);
//         //     if (res.status === 200) {
//         //       props.history.push("/");
//         //     } else {
//         //       const error = new Error(res.error);
//         //       throw error;
//         //     }
//         //   })
//         //   .catch(err => {
//         //     console.error(err);
//         //     alert("Error logging in please try again");
//         //   });
//     };
//     return (
//         <>
//             <h2>Add Portfolio</h2><br/>
//
//             {/*{props.user && props.isAuth && <Redirect to="/" />}*/}
//             <form onSubmit={onSubmit}>
//                 {/*<h1>Login Below!</h1>*/}
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Saisir un nom"
//                     value={values.name}
//                     onChange={handleInputChange}
//                     required/>
//                 <input type="submit" value="Submit" />
//             </form>
//         </>
//     );
// };
// export default AddPortfolio;




// import React, { useState } from 'react';
// import Input from '../components/Input';
// import axios from 'axios';
// import HeaderAdmin from '../components/HeaderAdmin';
//
// const defaultFormValues = {
//     introductionDate: '10/27/2016',
//     description: 'Apple MacBook Pro 13-Inch "Core i5" 2.0',
//     model: 'MLL42LL/A',
//     idModel: 'A1708 (EMC 2978)',
//     ram: 8,
//     storage: '256 GB SSD',
//     processor: 'Core i5 (I5-6360U)',
//     screen: '13.3" Widescreen',
//     videoCard: 'Iris Graphics 540',
// };
//
// const createProduct = async (product) => {
//     try {
//         const res = await axios.post(
//             'http://localhost:8000/api/admin/products',
//             product,
//         );
//         console.log(res.data);
//     } catch (err) {
//         console.error(err);
//     }
// };
//
// function AddProductForm() {
//     const [values, setValues] = useState(defaultFormValues);
//
//     async function handleSubmit(event) {
//         event.preventDefault();
//         createProduct(values);
//
//         // alert(JSON.stringify(values, null, 2));
//     }
//
//     function handleChange(event) {
//         // console.log('event', event);
//         const key = event.target.name;
//         const value = event.target.value;
//
//         setValues({ ...values, [key]: value });
//     }
//
//     const productKeys = [
//         { label: 'Description', key: 'description', type: 'text' },
//         { label: 'Introduction Date', key: 'introductionDate', type: 'date' },
//         { label: 'Modèle', key: 'model', type: 'text' },
//         { label: 'Id Modèle', key: 'idModel', type: 'text' },
//         { label: 'Ram', key: 'ram', type: 'number' },
//         { label: 'Storage', key: 'storage', type: 'text' },
//         { label: 'Processeur', key: 'processor', type: 'text' },
//         { label: 'Screen', key: 'screen', type: 'text' },
//         { label: 'Carte Graphique', key: 'videoCard', type: 'text' },
//     ];
//
//     return (
//         <form onSubmit={handleSubmit}>
//             {productKeys.map(({ label, key, type }, index) => {
//                 return (
//                     <Input
//                         key={index}
//                         label={label}
//                         type={type}
//                         placeholder={values[key]}
//                         name={key}
//                         onChange={handleChange}
//                     />
//                 );
//             })}
//             <input type="submit" value="Envoyer" />
//         </form>
//     );
// }
//
// function Admin() {
//     return (
//         <>
//             <HeaderAdmin />
//             <h2>Admin</h2>
//             <AddProductForm />
//         </>
//     );
// }
//
// export default Admin;
