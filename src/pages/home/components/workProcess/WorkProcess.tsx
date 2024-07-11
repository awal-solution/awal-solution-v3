import { Plus,Minus } from "lucide-react";
import {workProccesImages,workProcessData } from "@src/data/work_process"
import {AccordionTitle} from "@src/components/ui/accordion/AccordionTitle"
import { Fragment, useState } from "react";

export const WorkProcess = () => {

  const data: { id: number; title: string; data: string }[] = [
  {
    id: 1,
    title: 'Accordion 1',
    data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore ullam similique tenetur, reiciendis saepe doloribus? Repellat, ipsam sint? Soluta laudantium fugit repellat facilis et impedit fuga quasi nihil aspernatur neque aut qui quas, nemo explicabo architecto atque saepe provident, quae mollitia officia! Alias odit pariatur libero est aspernatur? Dignissimos?',
  },
  {
    id: 2,
    title: 'Accordion 1',
    data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore ullam similique tenetur, reiciendis saepe doloribus? Repellat, ipsam sint? Soluta laudantium fugit repellat facilis et impedit fuga quasi nihil aspernatur neque aut qui quas, nemo explicabo architecto atque saepe provident, quae mollitia officia! Alias odit pariatur libero est aspernatur? Dignissimos?',
  },
  {
    id: 3,
    title: 'Accordion 1',
    data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore ullam similique tenetur, reiciendis saepe doloribus? Repellat, ipsam sint? Soluta laudantium fugit repellat facilis et impedit fuga quasi nihil aspernatur neque aut qui quas, nemo explicabo architecto atque saepe provident, quae mollitia officia! Alias odit pariatur libero est aspernatur? Dignissimos?',
  },
  {
    id: 4,
    title: 'Accordion 1',
    data: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore ullam similique tenetur, reiciendis saepe doloribus? Repellat, ipsam sint? Soluta laudantium fugit repellat facilis et impedit fuga quasi nihil aspernatur neque aut qui quas, nemo explicabo architecto atque saepe provident, quae mollitia officia! Alias odit pariatur libero est aspernatur? Dignissimos?',
  },
  ];

  const [toggle, setToggle] = useState<{ id: number; state: boolean }>({
    id: 1,
    state: true,
  });

  const handleToggle = (id: number) => {
    if (toggle.id === id) {
      setToggle({ id: id, state: !toggle.state });
      return;
    }

    setToggle({ id: id, state: true });
  };
  
  return (
    <div className="relative w-full bg-[#E3F0FF]">
      <div className='flex justify-center'>
        <img
          src={workProccesImages.bannerShape}
          alt='about banner'
          className='w-1/2'
        />
      </div>
      <img src={ workProccesImages.leftAngleShape } alt="image" />
      <div className="">
       {data?.map((item) => (
          <Fragment key={item.id}>
            {/* <AccordionTitle
              id={item.id}
              toggle={toggle}
              handleToggle={() => handleToggle(item.id)}
            >
              {item.title}
            </AccordionTitle>
            <AccordionPanel id={item.id} toggle={toggle}>
              <div className='p-5'>{item.data}</div>
            </AccordionPanel> */}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
