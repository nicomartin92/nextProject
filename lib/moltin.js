import {gateway as MoltinGateway} from '@moltin/sdk';

const Moltin = MoltinGateway({
    client_id: 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4'
})

export const getProducts = () => Moltin.Products.All();