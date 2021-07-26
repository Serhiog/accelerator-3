import { Suspense } from "react"
import ClipLoader from "react-spinners/ClipLoader";

export const WithLazy = (Component) => {


    return function (props) {
        console.log(props);
        return (
            <Suspense fallback={<ClipLoader size={150} margin={"0, auto"} />}>
                <Component props={props} />
            </Suspense>)

    }
}





