// Main
import * as Icons from 'iconsax-react';
import { IconProps } from 'iconsax-react';
import { FC } from 'react';

interface customIconProps extends IconProps {
  icon: keyof typeof Icons;
}

const CustomIconProvider: FC<customIconProps> = ({ icon, ...props }) => {
  const IconComponent = Icons[icon];
  return <IconComponent {...props} size={20} />;
};
export default CustomIconProvider;
