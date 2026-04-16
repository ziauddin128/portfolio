import {Button} from "./button"
import {
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  ShareIcon,
} from "./icons"

const CommerceButton = () => {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-8">
          {/* E-commerce Buttons */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="default" >
                    Buy Now
                </Button>
                <Button variant="outline" >
                    Save for Later
                </Button>
                <Button variant="secondary" >
                    Write Review
                </Button>
                <Button variant="ghost">
                    Share Product
                </Button>
            </div>
          </div>
      </div>
    );
  }
  
  export default CommerceButton;
  