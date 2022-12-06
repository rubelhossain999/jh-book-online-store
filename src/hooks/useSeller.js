import { useEffect, useState } from "react";

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://book-resale-server-site.vercel.app/regisusers/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                })
        }
    }, [email]);

    return [isSeller]
}
export default useSeller;
