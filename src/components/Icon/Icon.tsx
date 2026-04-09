import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconProp;
  size?: number;
  color?: string;
  className?: string;
};

export function Icon({ icon, size, color, className }: Props) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      style={{ width: size, height: size, color }}
    />
  );
}
