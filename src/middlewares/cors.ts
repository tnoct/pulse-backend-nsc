import cors, { type CorsOptions } from "cors";

const options: CorsOptions = {
    methods: ["*"],
    origin: ["http://localhost:5173"],
};

export default cors(options);
