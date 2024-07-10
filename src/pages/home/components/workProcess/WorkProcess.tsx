import { Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import { ChevronDown } from "lucide-react";


export const WorkProcess = () => {
  return (
    <div className="w-full bg-[#E3F0FF] px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>What is your refund policy?</span>
                <ChevronDown
                  className={`${
                    open ? "rotate-180" : ""
                  } size-5 text-purple-500`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <DisclosureButton className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Do you offer technical support?</span>

                <ChevronDown
                  className={`${
                    open ? "rotate-180" : ""
                  } size-5 text-purple-500`}
                />
              </DisclosureButton>
              <DisclosurePanel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                No.
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
