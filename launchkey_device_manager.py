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
class LaunchkeyDeviceManager:
    def __init__(self, sender, product_defs):
        self.sender = sender
        self.product_defs = product_defs

    def select_pot_layout(self, layout):
        self.sender.send_message(*self.product_defs.SurfaceEvent.PotLayout.value, layout)
