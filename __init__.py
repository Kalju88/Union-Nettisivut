#
# Copyright (c) 2025 Focusrite Audio Engineering Ltd.
#
# All rights reserved.
#
# This script is proprietary and confidential. It is intended solely for use
# with Novation hardware products in conjunction with a supported DAW.
# Unauthorised copying, modification, distribution, or
# use of this script for any other purpose is strictly prohibited.
#
# Execution of this script is permitted only as part of the official integration
# process using a third-party DAW.
# Any reverse engineering, repurposing, or use outside the intended
# scope is a violation of these terms.
#
from script.constants import DeviceId
from script.device_adapters.device_manager.launchcontrol_3_device_manager import LaunchControl3DeviceManager
from script.device_adapters.device_manager.launchcontrolxl_mk3_device_manager import LaunchControlXlMk3DeviceManager
from script.device_adapters.device_manager.launchkey_mk4_range_device_manager import LaunchkeyMk4RangeDeviceManager

from .flkey_2_range_device_manager import FLkey2RangeDeviceManager
from .flkeyrange_device_manager import FLKeyRangeDeviceManager

__all__ = ["make_device_manager"]

from .launchkey_device_manager import LaunchkeyDeviceManager


def make_device_manager(device_id, sender, product_defs):
    """Instantiates and returns the relevant implementation of DeviceManager.

    Args:
        device_id: Device for which to return an implementation of DeviceManager.
        sender: required by DeviceManager instance to control hardware.
        product_defs: required by DeviceManager to send device specific control messages.

    Returns:
        Instance of a DeviceManager implementation.
    """
    if device_id in [DeviceId.FLkey37, DeviceId.FLkey49, DeviceId.FLkey61, DeviceId.FLkeyMini]:
        return FLKeyRangeDeviceManager(sender, product_defs)
    if device_id in [DeviceId.FLkey2, DeviceId.FLkeyMini2]:
        return FLkey2RangeDeviceManager(sender, product_defs)
    if device_id in [DeviceId.Launchkey, DeviceId.Launchkey88]:
        return LaunchkeyDeviceManager(sender, product_defs)
    if device_id in [DeviceId.LaunchkeyMk4, DeviceId.LaunchkeyMiniMk4]:
        return LaunchkeyMk4RangeDeviceManager(sender, product_defs)
    if device_id == DeviceId.LaunchControlXlMk3:
        return LaunchControlXlMk3DeviceManager(sender, product_defs)
    if device_id == DeviceId.LaunchControl3:
        return LaunchControl3DeviceManager(sender, product_defs)
    return None
