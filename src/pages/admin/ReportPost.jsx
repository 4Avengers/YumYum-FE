import React from 'react'
import LayoutAdmin from "components/layout/LayoutAdmin";
import CustomHelmet from "elements/CustomHelmet";

const ReportPost = () => {
  return (
    <div>
      <LayoutAdmin
            title="신고된 포스트"
      >
      <div>체크박스 클릭시 포스트 복원</div>

      </LayoutAdmin>
    </div>
  )
}

export default ReportPost
