import axios from "axios";
import { GetServerSideProps } from "next";
import { IModel, IProductModel, useProduct } from "../../../hook/useProduct";
import Link from "next/link";

const Products = (data: IModel) => {
    const products = useProduct(data)
    console.log(products)
    return (
        <div>
            {
                products.data.map((value,index)=>(
                  <Link key={value.id} href={`/products/${value.id}`}>  <p  onClick={()=>data}>{value.title}</p> </Link>
                ))
            }
        </div>
    )
}



export default Products


export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const get_api = await axios.get("http://localhost:5000/products")
        const extracted_data: Array<IProductModel> = get_api.data;
        return {
            props: {
                product: extracted_data
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                product: []
            }
        }
    }


    // if(!extracted_data){
    //     return{
    //         notFound:true
    //     }
    // }



    // return axios.get("http://localhost:5000/products")
    //     .then((result) => {
    //         const extracted_data: Array<IProductModel> = result.data;
    //         return {
    //             props: {
    //                 product: extracted_data
    //             }
    //         }
    //     })
    //     .catch(() => {
    //         return {
    //             props: {
    //                 product: []
    //             }
    //         }
    //     })
}





