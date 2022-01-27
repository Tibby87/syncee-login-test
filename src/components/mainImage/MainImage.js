import wallpaper from "./assets/syncee_frontend_test_wallpaper.png";

function MainImage() {
  return (
    <div>
      <img src={wallpaper} alt="syncee wallpaper" className="main-img" />
    </div>
  );
}

export default MainImage;
