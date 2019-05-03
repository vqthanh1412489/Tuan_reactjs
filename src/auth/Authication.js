
const logged = true;
export const AuthRequest = (page) => {
  if(logged){
    return page;
  }
  return null;
}