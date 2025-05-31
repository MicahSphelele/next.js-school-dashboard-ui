import UserCardView from "@/components/user-card-view";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="h-7 w-7 lg:w-2/3">
        {/*USER CARDS*/}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCardView type="Student" />
          <UserCardView type="Teachers" />
          <UserCardView type="Parents" />
          <UserCardView type="Staff" />
        </div>
      </div>
      {/* RIGHT */}
      <div className="h-7 w-7 lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
