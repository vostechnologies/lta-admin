import {
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Progress,
  Spinner,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { validateToken } from "../../util/api";
import { getUser } from "../../util/local";



const PrivateRoute = () => {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (isLoading) {
      validateTokenClient();
    }
  }, [isLoading]);
  const validateTokenClient = async () => {
    let _user = getUser();
    console.log(_user);
    if (!_user) {
      setAuthenticated(false);
    }
    const { valid } = await validateToken();
    console.log(valid);
    setAuthenticated(valid);
    setLoading(false);
  };
  return isLoading ? (
    <>
      <Modal isOpen={isLoading} size="xs">
        <ModalOverlay />
        <ModalContent
          w="64px"
          h="64px"
          alignSelf="center"
          justifySelf="center"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner colorScheme="purple" />
        </ModalContent>
      </Modal>
    </>
  ) : isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
