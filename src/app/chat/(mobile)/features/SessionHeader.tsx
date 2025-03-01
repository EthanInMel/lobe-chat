import { ActionIcon, Avatar, MobileNavBar } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { MessageSquarePlus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

import { MOBILE_HEADER_ICON_SIZE } from '@/const/layoutTokens';
import { useGlobalStore } from '@/store/global';
import { useSessionStore } from '@/store/session';
import Logo from '../../../../components/Icons/logo';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    fill: ${token.colorText};
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const Header = memo(() => {
  const [createSession] = useSessionStore((s) => [s.createSession]);
  const router = useRouter();
  const avatar = useGlobalStore((st) => st.settings.avatar);
  return (
    <MobileNavBar
      center={<Logo />}
      left={
        <div onClick={() => router.push('/settings')} style={{ marginLeft: 8 }}>
          {avatar ? <Avatar avatar={avatar} size={28} /> : <Logo />}
        </div>
      }
      right={
        <ActionIcon
          icon={MessageSquarePlus}
          onClick={() => createSession()}
          size={MOBILE_HEADER_ICON_SIZE}
        />
      }
    />
  );
});

export default Header;
