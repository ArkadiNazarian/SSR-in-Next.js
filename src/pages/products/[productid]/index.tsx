import axios from "axios";
import { GetServerSideProps } from "next";

interface IProductDetailsModel {
    product_details:{
        id: number;
        title: string;
        price: number;
    }
   
}

const Products = (data:IProductDetailsModel) => {

    return (
        <div>
            <p>{data.product_details.title}</p>
            <p>{data.product_details.price}</p>
        </div>
    )
}



export default Products


export const getServerSideProps: GetServerSideProps = async (context) => {
    try {
        const get_api = await axios.get(`http://localhost:5000/products/${context.params?.productid}`)
        const extracted_data = get_api.data;
        return {
            props: {
                product_details: extracted_data
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                product: {}
            }
        }
    }
}