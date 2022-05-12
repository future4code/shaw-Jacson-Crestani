export const goToLogin = (navigate) => {
  navigate("/");
};

export const goToCadastre = (navigate) => {
  navigate("/cadastre");
};

export const goToFeed = (navigate) => {
  navigate("/feed");
};

export const goToPost = (navigate, id) => {
  navigate(`/post/${id}`);
};

export const goBack = (navigate) => {
  navigate(-1);
};

