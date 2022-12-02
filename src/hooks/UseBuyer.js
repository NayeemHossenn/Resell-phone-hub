import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [buyerLoading, setBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://resale-phone-server-nayeemhossenn.vercel.app/users/buyer/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyer(data.isBuyer);
          setBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, buyerLoading];
};

export default useBuyer;
