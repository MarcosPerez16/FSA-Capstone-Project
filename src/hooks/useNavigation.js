// imports here
import { useNavigate } from "react-router-dom";
const useNavigation = () => {
  // logic here

  const navigate = useNavigate();

  const handleReturnToProducts = () => {
    navigate("/");
  };

  return { handleReturnToProducts };
};

export default useNavigation;
