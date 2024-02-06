import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / Shoppping Cart`;
    }, [title]);

  return null;
}
