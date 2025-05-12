import Image from "next/image"
import {logoApp} from "../assets/index"
import Container from "./Container"
import Button from "./Button"
import ElipseBlueBlur from "./theme/ElipseBlueBlur"

export const Header = () => {
    return (
        <header>
        <div className="border-b border-[#1c243f] bg-[#070E27]">
        <Container className={`relative bg-[#070E27]`}>
            <div className="relative flex items-center justify-between py-4 lg:py-6">
                <Image src={logoApp} alt="Logo App" width={104} height={32} />
                <Button className="" href="" theme="primary">login</Button>
            </div>
            <ElipseBlueBlur />
        </Container>
        </div>
        </header>
    )
}