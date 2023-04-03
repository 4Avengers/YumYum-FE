import React from 'react'
import LayoutAdmin from "components/layout/LayoutAdmin";
import CustomHelmet from "elements/CustomHelmet";

const ReportComment = () => {
  return (
    <div>
      <LayoutAdmin
            title="신고된 댓글"
      >
      <div>체크박스 클릭시 댓글 복원</div>
      </LayoutAdmin>
      
    </div>
  )
}

export default ReportComment
