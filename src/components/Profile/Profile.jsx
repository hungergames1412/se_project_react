import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

export default function Profile({
  clothingItems,
  handleCardClick,
  handleAddClick,
  onEditProfile,
  onLogout,
  onCardLike,
  isLoggedIn,
}) {
  return (
    <section className="profile">
      <SideBar onEditProfile={onEditProfile} onLogout={onLogout} />

      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
        isLoggedIn={isLoggedIn}
      />
    </section>
  );
}
