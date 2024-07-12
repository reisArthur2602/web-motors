import { Link } from 'react-router-dom';
import Logo from '../../../../assets/logo-web-motors.svg';
import { CircleUserRound, LogInIcon } from 'lucide-react';
export const Header = () => {
  const signed = true;
  const loading = false;

  return (
    <header className="w-full py-8 px-4">
      <div className="mx-auto max-w-5xl w-full flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo Web-Motors" />
        </Link>

        {signed && !loading && (
          <Link to="/dashboard" className='hover:animate-pulse'>
            <CircleUserRound size={36} />
          </Link>
        )}

        {!signed && !loading && (
          <Link to="/dashboard"  className='hover:animate-pulse'>
            <LogInIcon size={36} />
          </Link>
        )}
      </div>
    </header>
  );
};
