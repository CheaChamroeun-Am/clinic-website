import React from "react";
import Link from "next/link";
import Button from "../../../components/Button";
import { HiShieldCheck } from "react-icons/hi";
import Contact from "../../../components/Contact";

const items1 = [
  {
    id: 1,
    title: "Examples of easily digestible foods",
    points: [
      "Rice porridge with no ingredients",
      "Steamed bread or rolls with no ingredients",
      "boiled egg",
      "Chicken fillet, chicken breast/thigh (excluding skin)",
      "jelly drinks",
      "Miso soup without any ingredients",
      "Somen noodles",
      "Tofu",
      "white fish, surimi",
    ],
  },
  {
    id: 2,
    title: "Examples of things you can buy at convenience stores",
    points: [
      "Packed rice (white rice)",
      "Onigiri (salt musubi, salmon, tuna mayo)",
      "Sandwiches (egg sandwich, tuna sandwich)",
      "potage soup",
      "egg tofu",
      "Retort porridge",
      "Cup miso soup (remove ingredients other than tofu such as green onions)",
      "Salad chicken (plain only)",
      "Udon (without toppings and condiments)",
    ],
  },
];

const items2 = [
  {
    id: 1,
    title: "Examples of easily digestible foods",
    points: [
      "White rice, porridge with no ingredients",
      "Steamed bread or rolls with no ingredients",
      "boiled egg",
      "Chicken fillet, chicken breast/thigh (excluding skin)",
      "Jelly drinks/pudding",
      "Miso soup without any ingredients",
      "Somen noodles",
      "Tofu/Chawanmushi",
      "Apples (without skin), bananas, canned peaches",
      "white fish, surimi",
    ],
  },
  {
    id: 2,
    title: "Examples of things you can buy at convenience stores",
    points: [
      "Egg steamed bread",
      "Salad chicken (plain only)",
      "Onigiri (salt musubi, grilled onigiri)",
      "thick fried egg",
      "Grilled fish (other than blue fish)",
      "potage soup",
      "banana",
      "cup miso soup",
      "Udon (without toppings and condiments)",
      "Boiled pumpkin",
    ],
  },
];

const DietaryPrecautions = () => {
  return (
    <div>
      <div className="main-section">
        <div className="flex gap-3 text-[13px]  text-gray-500">
          <Link href="/" className="underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/colonscope" className="underline">
            Colonscope
          </Link>
          <span>/</span>
          <span>Dietary precautions for colonoscopy</span>
        </div>
      </div>

      <div className="section2 mt-20">
        <h2 className="text-center">
          Precautions regarding meals during colonoscopy
        </h2>
        <p className="text-center mt-5">
          When undergoing a colonoscopy, you will need to clean your stomach
          (intestines). If undigested food remains in the intestines, the test
          may take longer and the diagnosis may be affected. Therefore, please
          eat foods that are easily digested before the test.
        </p>
        <div className="flex justify-center mt-5">
          <Button title="About Colon Camera" />
        </div>
      </div>

      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="order-last lg:order-first">
            <h3>Points to note on the day before the test</h3>
            <p className="mt-5">
              Eat easily digestible food for breakfast, lunch, and dinner.Upon
              request, we provide patients undergoing testing at our hospital
              with a pamphlet with examples of easy snacks created under the
              supervision of a registered dietitian. We also introduce recipes
              that can be prepared at convenience stores, so please feel free to
              ask us.
            </p>
            <p className="mt-1">
              Eat easily digestible food for breakfast, lunch, and dinner.Upon
              request, we provide patients undergoing testing at our hospital
              with a pamphlet with examples of easy snacks created under the
              supervision of a registered dietitian. We also introduce recipes
              that can be prepared at convenience stores, so please feel free to
              ask us. Our hospital also sells test food. Recommended for people
              who are worried about meals or have trouble thinking about menus.
              Although it is a retort food, the taste is well received by our
              hospital staff. If you are interested, please contact our hospital
              staff.
            </p>
          </div>

          <div className="order-first lg:order-last mx-auto">
            <img src="/dietary1.png" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items1.map((item) => (
            <div
              key={item.id}
              className="bg-main shadow-md text-white p-5 rounded-md"
            >
              <h4>{item.title}</h4>
              {item.points.map((point) => (
                <div key={point} className="flex gap-3 items-center mt-5">
                  <HiShieldCheck />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3 className="text-center">On the day of the test</h3>
        <p className="text-center mt-5">
          Please come to the hospital without eating on the day of the test, as
          if there is leftover food, the diagnosis may not be accurate. You can
          drink light, clear, sugar-free drinks such as water and tea, but
          please avoid dark-colored drinks such as milk, coffee, and juice,
          drinks that contain sugar, and drinks that contain solids such as
          fruit.
        </p>
        <div className="flex justify-center mt-5">
          <Button title="Make a reservation" />
        </div>
      </div>

      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div>
            <img src="/dietary2.png" />
          </div>
          <div>
            <h3>Precautions regarding diet after colon polyp removal</h3>
            <p className="mt-5">
              If you have had a colon polyp removed, please be careful about
              your diet for about a week. Avoid fatty and spicy foods and eat
              foods that are easily digested.
            </p>

            <p className="mt-1">
              If you have had a colon polyp removed, please be careful about
              your diet for about a week. Avoid fatty and spicy foods and eat
              foods that are easily digested. Also, please refrain from
              consuming alcohol. If you are unsure of what to eat, we recommend
              eating the same meal as the day before the test, or the test meal
              on the day of polyp removal or the next day.
            </p>
            <Button title="About Colon Polyp Removal" className="mt-10" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items2.map((item) => (
            <div
              key={item.id}
              className="bg-main-gray shadow-md  p-5 rounded-md"
            >
              <h4 className="text-main">{item.title}</h4>
              {item.points.map((point) => (
                <div key={point} className="flex gap-3 items-center mt-5">
                  <HiShieldCheck className="text-main" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <Contact/>
      </div>
    </div>
  );
};

export default DietaryPrecautions;
