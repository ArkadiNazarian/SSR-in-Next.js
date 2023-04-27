export interface IModel {
    product: Array<IProductModel>
}

export interface IProductModel {
    id: number;
    title: string;
    price: number;
}

export const useProduct = (props: IModel) => {

    return {
        data:props.product
    }

}
