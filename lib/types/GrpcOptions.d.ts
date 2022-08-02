declare type GrpcOptions = {
    hostname: string;
    port: number;
    deadline: number | null;
    useTransportSecurity: boolean;
};
export default GrpcOptions;
