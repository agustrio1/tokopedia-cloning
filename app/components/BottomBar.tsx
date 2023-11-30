'use client'
import Link from 'next/link';

const navs = [
  {
    icon: "apps",
    text: 'Home',
    image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/11/20723472/20723472_8e83f5b5-b78a-477f-a28f-c416e5249cd0.png.webp'
  },
  {
    icon: "heart",
    text: 'Feed',
    image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_7b72c368-d93e-41e1-8889-ef695ac5dc97.png.webp'
  },
  {
    icon: "cart",
    text: 'Official Store',
    image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/4/20723472/20723472_1e37237f-b884-4791-9083-a0af29e92a08.png.webp'
  },
  {
    icon: "card",
    text: 'Keranjang',
    image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/14/20723472/20723472_42491eb8-4d07-44f0-9a79-03ea94fdfd27.png.webp'
  },
  {
    icon: "md-person",
    text: 'Akun',
    image: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_a42a010b-bd35-4279-8bea-84e7bb1bcfc0.png.webp'
  }
];

const BottomBar = () => {
  return (
    <footer className="flex flex-row justify-between fixed bottom-0 max-w-[600px] bg-white border-t border-gray-300">
      <div className="flex justify-between items-center h-16 space-x-16">
        {navs.map((item, index) => (
          <Link key={index} href={item.text.toLowerCase()} className="flex flex-col items-center">
              <img src={item.image} alt={item.text} className="h-8 w-8 object-cover" />
              <p className="text-xs">{item.text}</p>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default BottomBar;
