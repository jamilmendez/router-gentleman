import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "../../models";
import { createUser, resetUser, userKey } from "../../redux/states/user";
import { getMorty } from "../../services"
import { clearLocalStorage } from "../../utilities";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(userKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace:true });
  }, []);

  const login = async() => {
    try {
      const result = await getMorty();
      dispatch(createUser({...result, rol: Roles.USER }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace:true });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Hola, este el el login</h2>
      <button onClick={ login }>Login</button>
    </div>
  )
}

export default Login