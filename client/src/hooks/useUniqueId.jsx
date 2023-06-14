import { useState, useEffect } from "react";

let idCounter = 0;

const useUniqueId = () => {
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(++idCounter);
  }, []);

  return id;
};

export { useUniqueId };
