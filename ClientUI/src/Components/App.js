import { useState } from "react";

import PublicationCreateModal from "./PublicationCreateModal";
import PublicationItem from "./PublicationItem";

const data = [
  {
    id: 1,
    title: "My summer week",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a fugiat magnam distinctio quam ad. Quibusdam illo doloremque officiis perspiciatis dicta quaerat dolorem repellat eius.",
  },
  {
    id: 2,
    title: "My summer week2",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a fugiat magnam distinctio quam ad. Quibusdam illo doloremque officiis perspiciatis dicta quaerat dolorem repellat eius.",
  },
];

function App() {
  const [publications, setPublications] = useState(data);
  const [show, setShow] = useState(false);

  const handleDeletePublication = (id) => {
    let deleteIndex = -1;
    for (let index = 0; index < publications.length; index++) {
      const element = publications[index];
      if (element.id === id) {
        deleteIndex = index;
        break;
      }
    }

    setPublications((old) => {
      console.log("gf");
      const copy = old.slice();
      copy.splice(deleteIndex, 1);
      return copy;
    });
  };

  const handleAddClick = () => {
    setShow(true);
    // setPublications(
    //   old => [
    //     ...old,
    //     {
    //       id: 3,
    //       title: "My summer week3",
    //       message:
    //         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a fugiat magnam distinctio quam ad. Quibusdam illo doloremque officiis perspiciatis dicta quaerat dolorem repellat eius.",
    //     }
    //   ]
    // )
  };

  return (
    <div className="App">
      <h1 className="w-100 text-center">Social App</h1>
      <div className="mx-3 btn btn-success" onClick={handleAddClick}>
        Add
      </div>
      {publications.map((p) => (
        <PublicationItem
          key={p.id}
          className="mb-3"
          id={p.id}
          title={p.title}
          message={p.message}
          onDelete={handleDeletePublication}
        />
      ))}
      <PublicationCreateModal
        show={show}
        onClose={() => setShow(false)}
        onCreate={(publication) => {
          setPublications((old) => [...old, { ...publication, id: 3 }]);
          setShow(false);
        }}
      />
    </div>
  );
}

export default App;
