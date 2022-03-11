export const SkeletonCard = () => {
  return <div className="card">
    <div className="user-header">
      <div className="user-avatar skeleton-box">
      </div>
      <div className="user-basic-info">
        <div className="user-username skeleton-box"></div>
        <div className="user-fullname skeleton-box"></div>
      </div>
    </div>
    <div className="user-info">
      <span className="user-title skeleton-box"></span>
      <span className="user-data skeleton-box"></span>
    </div>
    <div className="user-info">
      <span className="user-title skeleton-box"></span>
      <span className="user-data skeleton-box"></span>
    </div>
    <div className="user-info">
      <span className="user-title skeleton-box"></span>
      <span className="user-data skeleton-box"></span>
    </div>
    <div className="user-info">
      <span className="user-title skeleton-box"></span>
      <span className="user-data skeleton-box"></span>
    </div>
  </div>
}

