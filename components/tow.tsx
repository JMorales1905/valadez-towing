import Image from "next/image";

export default function Page() {
    return (
        <div>
            <Image
                src="/images/tow.jpg"
                width={300}
                height={300}
                alt="Picture of Tow Truck"
            />
        </div>
    )
}