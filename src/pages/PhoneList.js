import {useTitle} from "../hooks/useTitle";
import {PhoneCard} from "../components/PhoneCard";

export const PhoneList = ({title}) => {
  useTitle(title);

const PHONES = [{name:"Sony Wh-Ch510 Bluetooth Wireless", price:149, id:1001},
                {name:"boAt Rockerz 450", price:49, id:1002},
                {name:"JBL Tune 760NC", price:179, id:1003},
                {name:"Logitech H111 Wired", price:39, id:1004},
                {name:"APPLE Airpods Max Bluetooth Headset", price:199, id:1005},
                {name:"ZEBRONICS Zeb-Thunder Wired", price:29, id:1006}]

  return (
  <main  >
  <section className="products">
   { PHONES.map((phone) => (
               <PhoneCard key={phone.id} phone={phone} />
          )) }

   </section>
</main>       
 )
}
