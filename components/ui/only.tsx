import {Button} from "./button"
import {
  PlusIcon,
  MinusIcon,
  XIcon,
  SettingsIcon,
  SearchIcon,
  BellIcon,
  MailIcon,
  PhoneIcon
} from "./icons"

const OnlyIconButton = () => {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-8">
          {/* Icon Only Buttons */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="outline" size="sm"  />
                <Button variant="outline" size="sm"  />
                <Button variant="outline" size="sm"  />
                <Button variant="outline" size="sm" />
                <Button variant="outline" size="sm"  />
                <Button variant="outline" size="sm"  />
                <Button variant="outline" size="sm"  />
                <Button variant="outline" size="sm" />
            </div>
          </div>
      </div>
    );
  }
  
  export default OnlyIconButton;
  