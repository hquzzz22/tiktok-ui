import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/6770824e31c9ae33b4312bdf0ca3e41e~c5_100x100.jpeg?x-expires=1690434000&x-signature=ey32rqu2oj42OSGWd%2B3idS4wVdg%3D"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>nguyen van a</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
