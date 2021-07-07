import { useState } from "react";

import PublicationCreateModal from "./PublicationCreateModal";
import PublicationItem from "./PublicationItem";

import Api from '@core/api';

const data = [
  {
    id: -1,
    title: "My summer week",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a fugiat magnam distinctio quam ad. Quibusdam illo doloremque officiis perspiciatis dicta quaerat dolorem repellat eius.",
  },
  {
    id: -2,
    title: "My summer week2",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a fugiat magnam distinctio quam ad. Quibusdam illo doloremque officiis perspiciatis dicta quaerat dolorem repellat eius.",
  },
];

function App() {
  const [publications, setPublications] = useState(data);
  const [show, setShow] = useState(false);

  const handleDeletePublication = (id) => {
    //* API call
    Api.removePublication(id).then((result) => {
      let deleteIndex = -1;
      for (let index = 0; index < publications.length; index++) {
        const element = publications[index];
        if (element.id === id) {
          deleteIndex = index;
          break;
        }
      }
  
      setPublications((old) => {
        const copy = old.slice();
        copy.splice(deleteIndex, 1);
        return copy;
      });

      return result;
    }).catch((e) => alert(e));
  };

  const handleAddClick = () => {
    setShow(true);
  };

  const handleOnCreate = (publication) => {
    Api.addPublication(publication).then((result) => {
      setPublications((old) => [...old, result.data]);
    }).catch((e) => {
      alert(e);
    });
    setShow(false);
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
        onCreate={handleOnCreate}
      />
    </div>
  );
}

export default App;
