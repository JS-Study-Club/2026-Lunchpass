import { Tooltip } from 'react-tooltip';
import notification_icon from '/assets/img/notification-icon.svg';

import './TicketTip.css';

function TicketTip() {
  return (
    <>
      <a data-tooltip-id="ticket-tooltip" data-tooltip-place="top">
        <button className="info-button">
          <img src={notification_icon} alt="" />
          <span
            style={{
              color: '#9b9baa',
              fontSize: '14px',
              fontWeight: '400',
            }}
          >
            티켓팅 정보
          </span>
        </button>
      </a>
      <Tooltip id="ticket-tooltip" className="tooltip">
        <div className="tooltip-text">
          <div>- 티켓팅은 상시 오픈 중입니다.</div>
          <div>{'- 예매한 티켓은 My 티켓 > 보유한 티켓에서'}</div>
          <div>확인할 수 있습니다.</div>
        </div>
      </Tooltip>
    </>
  );
}
export default TicketTip;
